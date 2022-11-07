import defaultSettings from "@/setting";

const title = defaultSettings.TITLE;

export default function getPageTitle(pageTitle: any) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
