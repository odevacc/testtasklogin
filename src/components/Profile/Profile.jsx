import { Col, Typography } from 'antd'
import React from 'react'
import { connect } from 'react-redux'

const { Title } = Typography

const Profile = ({ username }) => {
    return (
        <Col offset={10} span={6}>
            <Title>{username}</Title>
        </Col>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username
    }
}

export default connect(mapStateToProps, null)(Profile)
