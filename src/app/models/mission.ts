export interface Mission {
  mission_name: string;
  launch_year: string;
  details: string;
  site_name: string;
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  },
  rocket: {
    rocket_name: string;
    rocket_type: string;
  },
  links: {
    article_link: string;
    wikipedia: string;
    video_link: string;
    mission_patch: string
    mission_patch_small: string
  }
}
