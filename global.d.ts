declare module "react-burger-menu" {
  import React from "react";

  export interface Props {
    customBurgerIcon?: React.ReactNode | false;
    customCrossIcon?: React.ReactNode | false;
    disableCloseOnEsc?: boolean;
    isOpen?: boolean;
    onStateChange?: (state: { isOpen: boolean }) => void;
    outerContainerId?: string;
    pageWrapId?: string;
    right?: boolean;
    styles?: object;
    width?: number | string;
    [key: string]: unknown;
  }

  export class slide extends React.Component<Props> {}
  export class stack extends React.Component<Props> {}
  export class elastic extends React.Component<Props> {}
  export class bubble extends React.Component<Props> {}
  export class push extends React.Component<Props> {}
  export class pushRotate extends React.Component<Props> {}
  export class scaleDown extends React.Component<Props> {}
  export class scaleRotate extends React.Component<Props> {}
  export class fallDown extends React.Component<Props> {}
}
