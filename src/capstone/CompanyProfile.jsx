import React, { Component } from 'react';
import style from './solution/style';

class CompanyProfile extends Component {
    render() {
        const { companyProfile } = this.props;
        const { description, ...rest } = companyProfile;
        return (
            <div>
                <div>
                    <div style={style.profileDescription}>
                        {description}
                    </div>
                    <div style={style.profileContainer}>
                        {
                            Object.keys(rest)
                                .map(data => {
                                    return (
                                        <div key={data} style={style.profileAttrContainer}>
                                            <div style={style.profileAttrTitle}>{data.toUpperCase()}</div>
                                            <div style={style.profileAttrValue}>{companyProfile[data]}</div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyProfile;