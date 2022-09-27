export interface video {
    title: string;
    author: string;
    id: string;
    viewDetails: ViewDetail[];
  }
  
  export interface ViewDetail {
    age: number;
    region: string;
    date: string;
  }

export interface searchParams{
  title: string;
  author: string;
}