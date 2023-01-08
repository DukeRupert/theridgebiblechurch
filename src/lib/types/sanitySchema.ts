// Sanity Schema types
export interface Church {
	about: About[];
	carousel: CarouselImage[];
	deacons: Elder[];
	directors: Elder[];
	elders: Elder[];
	phone: string;
	services: Service[];
	statements: Statement[];
	supports: Elder[];
}

export interface About {
	_key: string;
	_type: AboutType;
	children: Child[];
	markDefs: any[];
	style: Style;
}

export enum AboutType {
	Block = 'block'
}

export interface Child {
	_key: string;
	_type: ChildType;
	marks: any[];
	text: string;
}

export enum ChildType {
	Span = 'span'
}

export enum Style {
	Normal = 'normal'
}

export interface CarouselImage {
	alt: string;
	caption: string;
	imageUrl: string;
}

export interface Elder {
	bio: About[] | null;
	imageUrl: string;
	name: string;
	slug: string;
	title: string;
}

export interface Service {
	_key: string;
	_type: string;
	day: string;
	time: string;
}

export interface Statement {
	statement: About[];
	title: string;
}
