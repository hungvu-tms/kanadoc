export interface HospitalDetailData {
  name: string;
  zone: string;
  type: number;
  address: string;
  road: string;
  phone: string;
  fax: string;
  gallery: string[];
  access: string[];
  social: {
    title: string;
    social_type: string;
    link: string;
  };
  salary_info: {
    salary: {
      amount: string;
      note: string;
    };
    allowances: string;
    frequency: string;
    notes: string;
  };
  number_detail: {
    doctors: {
      total: string;
      nursing: string;
    };
    patients: {
      total: string;
      average: string;
    };
  };
  university: string;
  overall_info: {
    summary: string[];
    features: string[];
  };
}
