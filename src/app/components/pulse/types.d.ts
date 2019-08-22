
interface CSSPropertiesPulseVariables extends React.CSSProperties {
  '--pulse-height'?: string;
  '--pulse-initial-height'?: string;
  '--pulse-left-height'?: string;
  '--pulse-right-height'?: string;
  '--pulse-main-color'?: string;
  '--pulse-secondary-color'?: string;
  '--pulse-anim-time'?: string;
}

type FormatedHeight = [number, number, number] | undefined;

type FormatedBaseUnit = [string, string];

type FormattedProps = Readonly <{
  seed: number;
  baseUnit: FormatedBaseUnit;
  style?: React.CSSProperties;
  height?: FormatedHeight;
  initialHeight?: FormatedHeight;
  mainColor?: string;
  secondaryColor?: string;
  animTime?: string;
}>
