import React, { Component } from 'react';
import ImageEditor from '@toast-ui/react-image-editor';

import icon_b from './svg/icon-b.svg';
import icon_a from './svg/icon-a.svg';
import icon_c from './svg/icon-c.svg';
import icon_d from './svg/icon-d.svg';

class MemeMaker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            something: 'bob',
        };
    }

    render() {
        var blackTheme = {
            'common.bi.image': 'https://uicdn.toast.com/toastui/img/tui-image-editor-bi.png',
            'common.bisize.width': '251px',
            'common.bisize.height': '21px',
            'common.backgroundImage': 'none',
            'common.backgroundColor': '#1e1e1e',
            'common.border': '0px',
        
            // header
            'header.backgroundImage': 'none',
            'header.backgroundColor': 'transparent',
            'header.border': '0px',
        
            // load button
            'loadButton.backgroundColor': '#fff',
            'loadButton.border': '1px solid #ddd',
            'loadButton.color': '#222',
            'loadButton.fontFamily': '\'Noto Sans\', sans-serif',
            'loadButton.fontSize': '12px',
        
            // download button
            'downloadButton.backgroundColor': '#fdba3b',
            'downloadButton.border': '1px solid #fdba3b',
            'downloadButton.color': '#fff',
            'downloadButton.fontFamily': '\'Noto Sans\', sans-serif',
            'downloadButton.fontSize': '12px',
        
            // main icons
            'menu.normalIcon.path': icon_d,
            'menu.normalIcon.name': 'icon-d',
            'menu.activeIcon.path': icon_b,
            'menu.activeIcon.name': 'icon-b',
            'menu.disabledIcon.path': icon_a,
            'menu.disabledIcon.name': 'icon-a',
            'menu.hoverIcon.path': icon_c,
            'menu.hoverIcon.name': 'icon-c',
            'menu.iconSize.width': '24px',
            'menu.iconSize.height': '24px',
        
            // submenu primary color
            'submenu.backgroundColor': '#1e1e1e',
            'submenu.partition.color': '#3c3c3c',
        
            // submenu icons
            'submenu.normalIcon.path': icon_d,
            'submenu.normalIcon.name': 'icon-d',
            'submenu.activeIcon.path': icon_c,
            'submenu.activeIcon.name': 'icon-c',
            'submenu.iconSize.width': '32px',
            'submenu.iconSize.height': '32px',
        
            // submenu labels
            'submenu.normalLabel.color': '#8a8a8a',
            'submenu.normalLabel.fontWeight': 'lighter',
            'submenu.activeLabel.color': '#fff',
            'submenu.activeLabel.fontWeight': 'lighter',
        
            // checkbox style
            'checkbox.border': '0px',
            'checkbox.backgroundColor': '#fff',
        
            // range style
            'range.pointer.color': '#fff',
            'range.bar.color': '#666',
            'range.subbar.color': '#d1d1d1',
        
            'range.disabledPointer.color': '#414141',
            'range.disabledBar.color': '#282828',
            'range.disabledSubbar.color': '#414141',
        
            'range.value.color': '#fff',
            'range.value.fontWeight': 'lighter',
            'range.value.fontSize': '11px',
            'range.value.border': '1px solid #353535',
            'range.value.backgroundColor': '#151515',
            'range.title.color': '#fff',
            'range.title.fontWeight': 'lighter',
        
            // colorpicker style
            'colorpicker.button.border': '1px solid #1e1e1e',
            'colorpicker.title.color': '#fff',
        };
        
        const myTheme = {
            // Theme object to extends default dark theme.
            // 'common.bi.image':
            //     'https://uicdn.toast.com/toastui/img/tui-image-editor-bi.png',
            'common.bisize.width': '251px',
            'common.bisize.height': '21px',
            // 'common.backgroundImage': './img/bg.png',
            'common.backgroundColor': '#ff0000',
            'common.border': '1px solid #c1c1c1',

            // header
            'header.backgroundImage': 'none',
            'header.backgroundColor': 'transparent',
            'header.border': '0px',

            // load button
            'loadButton.backgroundColor': '#fff',
            'loadButton.border': '1px solid #ddd',
            'loadButton.color': '#222',
            'loadButton.fontFamily': "'Noto Sans', sans-serif",
            'loadButton.fontSize': '12px',

            // download button
            'downloadButton.backgroundColor': '#fdba3b',
            'downloadButton.border': '1px solid #fdba3b',
            'downloadButton.color': '#fff',
            'downloadButton.fontFamily': "'Noto Sans', sans-serif",
            'downloadButton.fontSize': '12px',

            // main icons
            'menu.normalIcon.path': icon_d,
            'menu.normalIcon.name': 'icon-d',
            'menu.activeIcon.path': icon_b,
            'menu.activeIcon.name': 'icon-b',
            'menu.disabledIcon.path': icon_a,
            'menu.disabledIcon.name': 'icon-a',
            'menu.hoverIcon.path': icon_c,
            'menu.hoverIcon.name': 'icon-c',
            'menu.iconSize.width': '24px',
            'menu.iconSize.height': '24px',

            // submenu primary color
            'submenu.backgroundColor': 'transparent',
            'submenu.partition.color': '#e5e5e5',

            // submenu icons
            'submenu.normalIcon.path': '../dist/svg/icon-d.svg',
            'submenu.normalIcon.name': 'icon-d',
            'submenu.activeIcon.path': '../dist/svg/icon-b.svg',
            'submenu.activeIcon.name': 'icon-b',
            'submenu.iconSize.width': '32px',
            'submenu.iconSize.height': '32px',

            // submenu labels
            'submenu.normalLabel.color': '#858585',
            'submenu.normalLabel.fontWeight': 'normal',
            'submenu.activeLabel.color': '#000',
            'submenu.activeLabel.fontWeight': 'normal',

            // checkbox style
            'checkbox.border': '1px solid #ccc',
            'checkbox.backgroundColor': '#fff',

            // rango style
            'range.pointer.color': '#333',
            'range.bar.color': '#ccc',
            'range.subbar.color': '#606060',

            'range.disabledPointer.color': '#d3d3d3',
            'range.disabledBar.color': 'rgba(85,85,85,0.06)',
            'range.disabledSubbar.color': 'rgba(51,51,51,0.2)',

            'range.value.color': '#000',
            'range.value.fontWeight': 'normal',
            'range.value.fontSize': '11px',
            'range.value.border': '0',
            'range.value.backgroundColor': '#f5f5f5',
            'range.title.color': '#000',
            'range.title.fontWeight': 'lighter',

            // colorpicker style
            'colorpicker.button.border': '0px',
            'colorpicker.title.color': '#000',
        };

        return (
            <ImageEditor
                includeUI={{
                    theme: blackTheme,
                    menu: ['text'],
                    // initMenu: 'filter',
                    uiSize: {
                        width: '1000px',
                        height: '700px',
                    },
                    menuBarPosition: 'bottom',
                }}
                cssMaxHeight={500}
                cssMaxWidth={700}
                selectionStyle={{
                    cornerSize: 20,
                    rotatingPointOffset: 70,
                }}
                usageStatistics={false}
            />
        );
    }
}

export default MemeMaker;
