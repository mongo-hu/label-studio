import { Columns } from "../../../components/Columns/Columns";
import { Description } from "../../../components/Description/Description";
import { Block, cn } from "../../../utils/bem";
import { Elem } from "../../../utils/bem";
import { StorageSet } from "./StorageSet";
import "./StorageSettings.scss";
import { isInLicense, LF_CLOUD_STORAGE_FOR_MANAGERS } from "../../../utils/license-flags";
import { t } from '../../../../../../language/i18n'

const isAllowCloudStorage = !isInLicense(LF_CLOUD_STORAGE_FOR_MANAGERS);

export const StorageSettings = () => {
  const rootClass = cn("storage-settings");

  return isAllowCloudStorage ? (
    <Block name="storage-settings">
      <Elem name={"wrapper"}>
        <h1>Cloud Storage</h1>
        <Description style={{ marginTop: 0 }}>
          {t("StorageSettings1")}
        </Description>

        <Columns count={2} gap="40px" size="320px" className={rootClass}>
          <StorageSet title={t("StorageSettings2")} buttonLabel={t("StorageSettings3")} rootClass={rootClass} />

          <StorageSet
            title={t("StorageSettings4")}
            target="export"
            buttonLabel={t("StorageSettings5")}
            rootClass={rootClass}
          />
        </Columns>
      </Elem>
    </Block>
  ) : null;
};

StorageSettings.title = t("StorageSettings0");
StorageSettings.path = "/storage";
