import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function openWindow(url, { name = 'share', height = 400, width = 600 }, closeWindow, isExitWindows) {
    // 窗口大小 && 居中
    const top = (window.outerHeight / 2) + (window.screenY || window.screenTop || 0) - (height / 2)
    const left = (window.outerWidth / 2) + (window.screenX || window.screenLeft || 0) - (width / 2)

    // 启用多窗口
    name? name: `${Math.random() * 50}youngon` 

    typeof url === 'String'? String(url) : url

    // 窗口配置
    const config = {
        height,
        width,
        left,
        top,
        location: 'no',
        toolbar: 'no',
        status: 'no',
        directories: 'no',
        menubar: 'no',
        scrollbars: 'yes',
        resizable: 'no',
        centerscreen: 'yes',
        chrome: 'yes'
    }

    const sharePop = window.open(
        url, 
        name,
        Object.keys(config).map((key) => `${key}=${config[key]}`).join(', ')
    )

    if (closeWindow) {
        window.addEventListener('close', closeWindow(sharePop), false)
    }

    if (!isExitWindows) {
        sharePop.close()
        return
    }

    return sharePop
}


class Share extends PureComponent {
    
    _onClick = (e) => {
        const {
            customWindow,
            disable
        } = this.props;

        e.preventDefault();

        if (disable) return;
        customWindow? customWindow(this._createUrl()) : this._openWindow(this._createUrl());
    }

    _onKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === 13) {
            this._onClick(e);
        }
    }

    _createUrl = () => {
        const {
            urlState,
            urlFactory
        } = this.props;

        return urlFactory(urlState);
    }

    _openWindow = (shareUrl) => {
        const {
            windowHeight,
            windowWidth,
            windowName,
            closeWindow,
            isExitWindows
        } = this.props;

        const option = {
            name: windowName,
            height: windowHeight,
            width: windowWidth,
            isExitWindows
        }

        openWindow(shareUrl, option, closeWindow, isExitWindows);
    }

    render () {
        const {
            style,
            className,
            otherProps,
            children
        } = this.props
        return (
            <div
                {...otherProps}
                onClick = {this._onClick}
                onKeyPress = {this._onKeyPress}
                style = {{...style}}
                className = {className}
            >
                {children}
            </div>
        );
    }
}


/**
 * @method customWindow         // 自定义窗口
 * @method onKeyPress
 * @method closeWindow          // 关闭窗口事件
 * @method urlFactory           // 创建url工厂函数
 * @param  {windowHeight}
 * @param  {windowWidth}
 * @param  {windowName}
 */

Share.PropTypes = {
    otherProps: PropTypes.object,
    customWindow: PropTypes.func,
    onKeyPress: PropTypes.func,
    children: PropTypes.node,
    windowHeight: PropTypes.number,
    windowWidth: PropTypes.number,
    windowName: PropTypes.string,
    closeWindow: PropTypes.func,
    urlFactory: PropTypes.func,
    urlState: PropTypes.object,
    disable: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.String,
    isExitWindows: PropTypes.bool,
}

Share.defaultProps = {
    isExitWindows: true,
}

function createShare (className, urlparam, urlFactory, isExitWindows) {
    const shareCreate = (props) => {
       return <Share 
            {...props}
            className={className}
            urlState={urlparam(props)}
            urlFactory={urlFactory}
            isExitWindows={isExitWindows}
       />
    }
    
    return shareCreate
}

export default createShare;