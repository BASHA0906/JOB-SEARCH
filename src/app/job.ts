export interface Job {
  id: number;
  companyName: string;
  title: string;
  companyLogo: string;
  reference: string;
  isfavorite: boolean;
}

export interface JobData {
  id: number;
  companyName: string;
  title: string;
  companyLogo: string;
  reference: string;
  industries: string;
  types: string;
  publishDate: Date;
  location: string;
  description: string;
}
