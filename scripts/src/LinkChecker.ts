import * as fs from 'fs';
import * as path from 'path';
import { PathCreator } from './PathCreator.js';

export class LinkChecker {
	private _correctRoutes: string[] = [];
	private totalErrors: number = 0;
	private totalWarnings: number = 0;
	private result: string[] = [];
	private logFileOnly: boolean = false;
	private searchDir: string = '.';

	check(searchDir: string, logFile: string, logFileOnly: boolean) {
		// initialize
		this._correctRoutes = [];
		this.totalErrors = 0;
		this.totalWarnings = 0;
		this.result = [];
		this.logFileOnly = logFileOnly;
		this.searchDir = searchDir;
		// get the correct routes
		this.getRoutes(searchDir, searchDir);
		// check all files
		this.checkFolder(searchDir);
		// show the results
		this.addToResult(`Total errors: ${this.totalErrors}, total warnings: ${this.totalWarnings}.`);
		fs.writeFileSync(logFile, this.result.map((line) => line).join('\n'));
	}

	get correctRoutes(): string[] {
		return this._correctRoutes;
	}

	get hasErrors(): boolean {
		return this.totalErrors !== 0;
	}

	private addToResult(line: string) {
		this.result.push(line);
		if (!this.logFileOnly) {
			console.log(line);
		}
	}

	private checkFile(filepath: string) {
		const content: string = fs.readFileSync(filepath, 'utf8');
		const splitted: string[] = content.split('\n'); // will split every line break

		const errors: string[] = [];
		const warnings: string[] = [];
		for (let i = 0; i < splitted.length; i++) {
			let line = splitted[i].trim();
			// check the links
			if (line.includes('](')) {
				// remove the chars before the link
				line = line.replace(/[a-zA-Z0-9 .,*/:()-_'"`]*\[/, '[');
				// remove the chars behind the link until end of line
				// TODO the following line removes too much when round brackets are used within the angular brackets
				line = line.replace(/\)[a-zA-Z0-9 .,*/:()-_'"`]*$/, ')');
				// remember 'line' for the error message, thus use new variable from here on
				// remove the part between the angular brackets
				let link: string = line.replace(/\[[a-zA-Z0-9 .,*/:()-_'"`]*]/, '');
				// remove the surrounding round brackets
				link = link.replace(/\(/, '');
				link = link.replace(/\)/, '');
				// remove any reference to an anchor
				link = link.replace(/#[a-zA-Z0-9-_]*/, '');
				// now check the link against the available routes
				if (!this._correctRoutes.includes(link)) {
					errors.push(`${link}, on line ${i + 1}`);
				} else if (!link.startsWith('/')) {
					// always link relative to "/"
					warnings.push(`${line}, on line ${i + 1}`);
				}
			}
			// checks TODOs
			if (line.includes('TODO') || line.includes('todo')) {
				warnings.push(`TODO remaining on line ${i + 1}`);
			}
		}
		if (errors.length > 0) {
			this.addToResult(`Found ${errors.length} incorrect link(s) in file ${path.relative(this.searchDir, filepath)}:`);
			for (let i = 0; i < errors.length; i++) {
				this.addToResult('\t' + errors[i]);
			}
			this.totalErrors += errors.length;
		}
		if (warnings.length > 0) {
			this.addToResult(`Found ${warnings.length} warnings in file ${path.relative(this.searchDir, filepath)}:`);
			for (let i = 0; i < warnings.length; i++) {
				this.addToResult('\t' + warnings[i]);
			}
			this.totalWarnings += warnings.length;
		}
	}

	private checkFolder(folder: string) {
		if (!fs.existsSync(folder)) {
			console.error(this, "cannot find folder '" + folder + "'");
			return null;
		}
		if (!fs.lstatSync(folder).isDirectory()) {
			console.error(this, "'" + folder + "' is not a folder");
			return null;
		}
		// get content of the folder
		const files = fs.readdirSync(folder);
		for (const file of files) {
			const filepath = path.join(folder, file);
			const stat = fs.lstatSync(filepath);
			if (!stat.isDirectory()) {
				// if file does not have extension .md or .svelte, ignore it
				if (path.extname(filepath) === '.md' || path.extname(filepath) === '.svelte') {
					this.checkFile(filepath);
				}
			} else {
				// do all subFolders
				this.checkFolder(filepath);
			}
		}
	}

	private getRoutes(folder: string, ignore: string) {
		if (!fs.existsSync(folder)) {
			console.error(this, "cannot find folder '" + folder + "'");
			return null;
		}
		if (!fs.lstatSync(folder).isDirectory()) {
			console.error(this, "'" + folder + "' is not a folder");
			return null;
		}

		// get content of the folder and sort the names alphabetically
		const files = fs.readdirSync(folder);
		for (const file of files) {
			const filepath = path.join(folder, file);
			const stat = fs.lstatSync(filepath);
			if (stat.isDirectory()) {
				this._correctRoutes.push('/' + PathCreator.createFilePath(ignore, filepath));
				// do all subFolders
				this.getRoutes(filepath, ignore);
			}
		}
	}
}
