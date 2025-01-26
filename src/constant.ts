export const QUERY_CONSTANT = {
  PAGE: "page",
  PAGE_SIZE: "pageSize",
  SEARCH: "search",
  DATE_RANGE: {
    START: "startDate",
    END: "endDate",
  },
  DOCTOR: "doctor",
} as const;

export const DEFAULT_PARAMS = {
  PAGE: 1,
  PAGE_SIZE: 10,
} as const;
