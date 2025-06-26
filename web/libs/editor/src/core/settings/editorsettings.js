import { t } from '../../../../../language/i18n';
export default {
  enableHotkeys: {
    newUI: {
      title: t("AnnotationUISettings1"),
      description: t("AnnotationUISettings2"),
    },
    description: "Enable labeling hotkeys",
    onChangeEvent: "toggleHotkeys",
    defaultValue: true,
  },
  enableTooltips: {
    newUI: {
      title: t("AnnotationUISettings5"),
      description: t("AnnotationUISettings6"),
    },
    description: "Show hotkey tooltips",
    onChangeEvent: "toggleTooltips",
    checked: "",
    defaultValue: false,
  },
  enableLabelTooltips: {
    newUI: {
      title: t("AnnotationUISettings3"),
      description: t("AnnotationUISettings4"),
    },
    description: "Show labels hotkey tooltips",
    onChangeEvent: "toggleLabelTooltips",
    defaultValue: true,
  },
  showLabels: {
    newUI: {
      title: t("AnnotationUISettings7"),
      description: t("AnnotationUISettings8"),
    },
    description: "Show labels inside the regions",
    onChangeEvent: "toggleShowLabels",
    defaultValue: false,
  },
  continuousLabeling: {
    newUI: {
      title: t("AnnotationUISettings9"),
      description: t("AnnotationUISettings10"),
    },
    description: "Keep label selected after creating a region",
    onChangeEvent: "toggleContinuousLabeling",
    defaultValue: false,
  },
  selectAfterCreate: {
    newUI: {
      title: t("AnnotationUISettings11"),
      description: t("AnnotationUISettings12"),
    },
    description: "Select regions after creating",
    onChangeEvent: "toggleSelectAfterCreate",
    defaultValue: false,
  },
  showLineNumbers: {
    newUI: {
      tags: "Text Tag",
      title: t("AnnotationUISettings13"),
      description: t("AnnotationUISettings37"),
    },
    description: "Show line numbers for Text",
    onChangeEvent: "toggleShowLineNumbers",
    defaultValue: false,
  },
  preserveSelectedTool: {
    newUI: {
      tags: "Image Tag",
      title: t("AnnotationUISettings15"),
      description: t("AnnotationUISettings16"),
    },
    description: "Remember Selected Tool",
    onChangeEvent: "togglepreserveSelectedTool",
    defaultValue: true,
  },
  enableSmoothing: {
    newUI: {
      tags: "Image Tag",
      title: t("AnnotationUISettings17"),
      description: t("AnnotationUISettings18"),
    },
    description: "Enable image smoothing when zoom",
    onChangeEvent: "toggleSmoothing",
    defaultValue: true,
  },
};
