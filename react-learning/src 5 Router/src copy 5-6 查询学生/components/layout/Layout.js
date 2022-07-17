import React from 'react'
import "./Layout.css"
import PropTypes from 'prop-types'

export default function Layout(props) {
    return (
        <div className="container">
            <header className="header">
                {props.header}
            </header>
            <section className="middle">
                <aside className="menus"> {props.menus}</aside>
                <section className="content">
                    {props.children}
                </section>
            </section>
            <footer className="footer">
                {props.footer}
            </footer>
        </div>
    )
}

Layout.propTypes = {
    header: PropTypes.element.isRequired,
    menus: PropTypes.element.isRequired,
    children: PropTypes.node.isRequired,
    footer: PropTypes.element.isRequired
}