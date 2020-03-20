import React from "react";
import HocComponent from "@/pages/hooks/components/hocComponent";

export default class Articles extends React.Component{
    constructor(props) {
        super(props)
    }



    render() {
        const propParas = { familyNum: 4,  brotherName: 'long' };
        //  修改样式的高阶组件
        const StyHoc = HocComponent => {
            return class extends React.Component {
                render() {
                    return (
                        <div>
                            <div style={{fontSize: '32px'}}>
                                <HocComponent {...propParas}></HocComponent>
                            </div>
                        </div>
                    )
                }
            }
        };

        // 新增props(对原props增删改)
        const PropHoc = HocComponent => {
            return class extends React.Component {
                render() {
                    const newProps = {...propParas, user: 'new props from ProHoc'}
                    return (
                        <HocComponent {...newProps} />
                    )
                }
            }
        };

        const Hoc = StyHoc(HocComponent);
        const PropHocc = PropHoc(HocComponent);
        return (
            <div>
                <HocComponent {...propParas}></HocComponent>
                <Hoc></Hoc>
                <PropHocc></PropHocc>
            </div>
        )
    }
}