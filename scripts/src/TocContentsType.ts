export class TocContentsType {
	constructor(name: string, path: string, content: TocContentsType[], markdown?: string) {
		this.name = name;
		this.path = path;
		this.content = content;
		this.markdown = markdown
	}

	name: string;
	path?: string;
	content?: TocContentsType[];
	markdown?: string;
}

export class CategoryInfoType {
	constructor(name: string, path: string, toc: TocContentsType) {
		this.name = name;
		this.path = path;
		this.toc = toc;
	}

	name: string;
	path: string;
	toc: TocContentsType;
}
