// Type definitions for React OnSenui (react-onsenui) 2.1
// Project: https://onsen.io/v2/docs/guide/react/
// Definitions by: Ozytis <https://ozytis.fr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
import {
    Component
} from 'react';





    declare interface Modifiers_string {
        default?: string,
        material?: string
    }

    declare interface Modifiers_number {
        default?: number,
        material?: number
    }

    declare interface AnimationOptions {
        duration?: number,
        delay?: number,
        timing?: string
    }

    /*** splitter ***/

    declare class SplitterSide extends Component<{
        side?: "left" | "right",
        collapse?: "portrait" | "landscape" | boolean,
        isOpen?: boolean,
        onOpen?: (e?: Event) => void,
        onPreOpen?: (e?: Event) => void,
        onPreClose?: (e?: Event) => void,
        onModeChange?: (e?: Event) => void,
        onClose?: (e?: Event) => void,
        isSwipeable?: boolean,
        swipeTargetWidth?: number,
        width?: number,
        animation?: "overlay" | "default"
        animationOptions?: AnimationOptions,
        openThreshold?: number,
        mode?: "collapse" | "split"
    }, any>{

    }


    declare class SplitterContent extends Component<{}, any> {

    }

    declare class Splitter extends Component<{}, any> {

    }

    /*** toolbar ***/

    declare class Toolbar extends Component<{}, any>{

    }


    declare class BottomToolbar extends Component<{
        modifier?: string
    }, any>{

    }


    declare class ToolbarButton extends Component<{
        modifier?: string,
        disabled?: boolean,
        onClick?: (e?: Event) => void
    }, any>{

    }

    /*** icon ***/

    declare class Icon extends Component<{
        modifier?: string,
        icon?: string | Modifiers_string,
        size?: number | Modifiers_number,
        rotate?: 90 | 180 | 270,
        fixedWidth?: boolean,
        spin?: boolean
    }, any>{
    }

    /*** page ***/

    declare class Page extends Component<{
        contentStyle?: any,
        modifier?: string,
        renderModal?: () => void,
        renderToolbar?: () => void,
        renderBottomToolbar?: () => void,
        renderFixed?: () => void,
        onInit?: () => void,
        onShow?: () => void,
        onHide?: () => void
    }, any>{

    }

    /*** Grid ***/
    declare class Col extends Component<{
        verticalAlign?: "top" | "bottom" | "center",
        width?: string
    }, any>{

    }

    declare class Row extends Component<{
        verticalAlign?: "top" | "bottom" | "center",
    }, any>{

    }

    /*** Navigation ***/
    declare class BackButton extends Component<{
        modifier?: string,
        onClick?: (navigator: Navigator) => void
    }, any>{

    }

    declare class Navigator extends Component<{
        renderPage: () => any,
        initialRouteStack?: string[],
        initialRoute?: any,
        onPrePush?: () => void,
        onPostPush?: () => void,
        onPrePop?: () => void,
        onPostPop?: () => void,
        animation?: "slide" | "lift" | "fade" | "none" | string,
        animationOptions?: AnimationOptions
    }, any>{
        resetPage(route: any, options: any): void;
        resetPageStack(route: any, options: any): void;
        pushPage(route: any, options: any): void;
        popPage(route: any, options: any): void;
    }

    /*** Carousel ***/
    declare class Carousel extends Component<{
        direction?: "horizontal" | "vertical",
        fullscreen?: boolean,
        overscrollable?: boolean,
        centered?: boolean,	
        itemWidth?: number, 
        itemHeight?: number,
        autoScroll?: boolean,
        autoScrollRatio?: number, 
        swipeable?: boolean,	
        disabled?: boolean,	
        index?: number, 
        autoRefresh?: boolean,
        onPostChange?: () => void,
        onRefresh?: () => void, 
        onOverscroll?: () => void
        animationOptions?: AnimationOptions	
    }, any>{

    }

    declare class CarouselItem extends Component<{
        modifier: string	
    }, any>{

    }

    /*** AlertDialog ***/
    declare class AlertDialog extends Component<{
        onCancel?: () => void,
        isOpen?: boolean, 
        isCancelable?: boolean,
        isDisabled?: boolean, 
        animation?: "none" | "default", 
        modifier?: string, 
        maskColor?: string, 
        animationOptions?: AnimationOptions, 
        onPreShow?: () => void,
        onPostShow?: () => void, 
        onPreHide?: () => void, 
        onPostHide?: () => void,
    }, any>{

    }

    declare class Dialog extends Component<{
        onCancel?: () => void, 
        isOpen?: boolean, 
        isCancelable?: boolean, 
        isDisabled?: boolean, 
        animation?: "none" | "default", 
        modifier?: string, 
        maskColor?: string, 
        animationOptions?: AnimationOptions, 
        onPreShow?: () => void, 	
        onPostShow?: () => void, 	
        onPreHide?: () => void, 	
        onPostHide?: () => void, 	                         
    }, any>{

    }

    declare class Modal extends Component<{
        animation?: "fade" | "none",
        animationOptions?: AnimationOptions
        onShow?: () => void, 
        onHide?: () => void, 
        isOpen?: boolean 
    }, any>{

    }

    declare class Popover extends Component<{
        getTarget?: () => Component<any, any> | HTMLElement, 
        onCancel?: () => void,
        isOpen?: boolean, 
        isCancelable?: boolean,
        isDisabled?: boolean, 
        animation?: "none" | "default", 
        modifier?: string,
        maskColor?: string, 
        animationOptions?: AnimationOptions,
        onPreShow?: () => void, 
        onPostShow?: () => void, 
        onPreHide?: () => void, 
        onPostHide?: () => void,
    }, any>{

    }

    declare class ProgressBar extends Component<{
        modifier?: string, 
        value?: number, 
        secondaryValue?: boolean, 
        intermediate?: boolean, 
    }, any> {

    }

    declare class ProgressCircular extends Component<{
        modifier?: string, 
        value?: number, 
        secondaryValue?: boolean, 
        intermediate?: boolean, 
    }, any>{

    }

    declare class Ripple extends Component<{
        color?: string, 
        background?: string,
        disabled?: boolean, 
    }, any>{

    }

    /*** Forms ***/
    declare class Fab extends Component<{
        modifier?: string,	
        ripple?: boolean,	
        position?: string,	
        disabled?: boolean,	
        onClick?: () => void,
    }, any>{

    }

    declare class Button extends Component<{
        modifier?: string,	
        disabled?: boolean,	
        ripple?: boolean,	
        onClick?: (e?: Event) => void
    }, any>{

    }

    declare class Input extends Component<{
        modifier?: string,	
        disabled?: boolean,	
        onChange?: (e: Event) => void,
        value?: string,
        checked?: boolean,
        placehoder?: string,
        type?: string,	
        inputId?: string,
        float?: boolean,
    }, any> {

    }

    declare class Range extends Component<{
        modifier?: string,	
        onChange?: (e: Event) => void,
        value?: number,	
        disabled?: boolean,
    }, any>{

    }

    declare class Switch extends Component<{
        onChange?: (e: Event) => void,
        checked?: boolean,
        disabled?: boolean,	
        inputId?: string 
    }, any>{

    }

    /**
     * Tabs
     */

    declare class Tab extends Component<{}, any>{ }

    declare class TabActive extends Component<{}, any>{ }

    declare class TabInactive extends Component<{}, any>{ }

    declare class Tabbar extends Component<{
        index?: number, 
        renderTabs?: () => any, 
        position?: "bottom" | "top" | "auto", 
        animation: "none" | "slide" | "fade", 
        animationOptions?: AnimationOptions, 
        onPreChange?: () => void,	
        onPostChange?: () => void,	
        onReactive?: () => void, 
    }, any> { }


    /**
     * Lists
     */

    declare class LazyList extends Component<{
        modifier?: string,
        length?: number,
        renderRow: (rowIndex: number) => any,
        calculateItemHeight: (rowIndex: number) => any, 
    }, any>{ }

    declare class List extends Component<{
        modifier?: string, 
        dataSource?: string[], 
        renderRow?: () => void, 
        renderHeader?: () => void,
        renderFooter?: () => void,
    }, any>{

    }

    declare class ListHeader extends Component<{
        modifier?: string, 
    }, any>{

    }

    declare class ListItem extends Component<{
        modifier?: string, 
        tappable?: boolean, 
        tapBackgroundColor?: string, 
        lockOnDrag?: boolean,
    }, any>{

    }


