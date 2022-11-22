import { get } from "../api";

export const getMap = () => get("/src/api/echarts/Json/china.json");
