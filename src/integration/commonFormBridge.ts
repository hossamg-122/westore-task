import { isProduction } from "@/plugins/siteBase";
import axios from "axios";

export type FormType = "Contact Form" | "Customer Interest" | "Vendor Interest";

export interface ICommonFormEntry {
  Type: FormType;
  Name: string;
  Email: string;
  Phone: string;
  Comments?: string;
}

export class commonFormBridge {
  static submitCommonForm = async (data: ICommonFormEntry) => {
    return axios
      .post(
        "https://prod-20.uaenorth.logic.azure.com:443/workflows/654bb34e3c5a4cdd87caac981bf0cbb8/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-u-XQuL8jhCUJbfjwuW1JkvDQezkZ3-g5XDukpnU4ws",
        {
          key: "Nxv4NMD80DRTfR0ysNigc1XZpGC0I6Ia",
          data: { ...data, ...{ New: true } },
          isDev: !isProduction(),
        }
      )
      .then((logicAppResponse) => {
        console.info(logicAppResponse);
      })
      .catch((err) => {
        console.error("submitCommonForm", err);
        throw err;
      });
  };
}
