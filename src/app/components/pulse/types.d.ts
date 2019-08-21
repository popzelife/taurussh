
interface CSSPropertiesPulseVariables extends React.CSSProperties {
  '--pulse-height'?: string;
  '--pulse-initial-height'?: string;
  '--pulse-left-height'?: string;
  '--pulse-right-height'?: string;
  '--pulse-main-color'?: string;
  '--pulse-secondary-color'?: string;
  '--pulse-anim-time'?: string;
}

type FormattedProps = Readonly <{
  seed: number;
  style?: React.CSSProperties;
  baseUnit?: string;
  height?: [number, number, number];
  initialHeight?: [number, number, number];
  mainColor?: string;
  secondaryColor?: string;
  animTime?: string;
}>

type FormatedHeight = [number, number, number] | undefined;
