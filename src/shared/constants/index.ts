export const ADMIN_CODES = {
  STATE: ['s001'],
  DISTRICT: ['d1', 'd2', 'd3', 'd4'],
  MANDAL: ['d1m1', 'd1m2', 'd2m1', 'd2m2']
};

export const DEFAULT_PASSWORD = 'admin123';

export const LANGUAGES = [
  { 
    code: 'en', 
    name: 'English', 
    nativeName: 'English',
    flag: '🇺🇸',
    countryCode: 'US'
  },
  { 
    code: 'hi', 
    name: 'Hindi', 
    nativeName: 'हिंदी',
    flag: '🇮🇳',
    countryCode: 'IN'
  },
  { 
    code: 'te', 
    name: 'Telugu', 
    nativeName: 'తెలుగు',
    flag: '🇮🇳',
    countryCode: 'IN'
  },
  { 
    code: 'ur', 
    name: 'Urdu', 
    nativeName: 'اردو',
    flag: '🇵🇰',
    countryCode: 'PK'
  }
];

export const COMPLAINT_STATUSES = {
  PENDING: 'Pending',
  IN_PROGRESS: 'In Progress',
  RESOLVED: 'Resolved'
} as const;

export const SCHEME_STATUSES = {
  APPLIED: 'Applied',
  UNDER_REVIEW: 'Under Review',
  APPROVED: 'Approved',
  REJECTED: 'Rejected'
} as const;

export const DEPARTMENTS = [
  'Municipal Department',
  'Water Department',
  'Sanitation Department',
  'Highway Maintenance',
  'Electrical Department',
  'Health Department'
];