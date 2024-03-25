import * as bo from "../shared/backoffice";
import { ActionHeaderCellType, ActionParamMaskType, ActionParamOption, ActionParamType, ActionResultTooltip, DataValue, PageData, ResultFormat, SelectInputOption, SelectInputOptionList } from "../shared/backoffice";
export { ActionParamType as BackofficeActionParamType, SelectInputOptionList as BackofficeSelectInputOptionList, ActionParamOption as BackofficeActionParamOption, SelectInputOption as BackofficeSelectInputOption, ActionParamMaskType as BackofficeActionParamMaskType, PageData as BackofficePageData, DataValue as BackofficeDataValue, ActionResultTooltip as BackofficeActionResultTooltip, ActionHeaderCellType as BackofficeActionHeaderCellType, ResultFormat as BackofficeResultFormat, };
export interface BackofficeSection extends bo.Section {
    subsections: BackofficeSubsection[];
}
export interface BackofficeSubsection extends bo.Subsection {
    section?: BackofficeSection;
    actions: BackofficeAction[];
}
export interface BackofficeAction extends bo.Action {
    section?: BackofficeSection;
    subsection?: BackofficeSubsection;
    params?: BackofficeActionParam[];
}
export interface BackofficeActionParam extends bo.ActionParam {
    action?: BackofficeAction;
}
export interface BackofficeActionResult extends bo.ActionResult {
    headers?: BackofficeActionResultHeader[];
    actions?: BackofficeAction[];
}
export interface BackofficeActionResultHeader extends bo.ActionResultHeader {
    action?: BackofficeAction;
}
export interface Backoffice {
    readonly sections: readonly BackofficeSection[];
}
