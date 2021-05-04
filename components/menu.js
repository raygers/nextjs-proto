import {Component} from "react";

export default function Navbar() {
    return (
        <ul>
            <li>
                <a href="/coverage">
                    Coverage
                </a>
            </li>
            <li>
                <a href="/fibre">
                    Fibre
                </a>
            </li>
            <li>
                <a href="/fibre/product">
                    Fibre Product Page
                </a>
            </li>
            <li>
                <a href="/lte">
                    LTE
                </a>
            </li>
            <li>
                <a href="/lte/product">
                    LTE Product Page
                </a>
            </li>
            <li>
                <a href="#">
                    Internet Security
                </a>
                <li>
                    <a href="/kaspersky">Kaspersky</a>
                </li>
                <li>
                    <a href="/avg">Avg</a>
                </li>
            </li>
            <li>
                <a href="/voip">
                    VoIP
                </a>
            </li>
            <li>
                <a href="/adsl">ADSL</a>
            </li>
            <li>
                <a href="/microsoft-office">Microsoft 365</a>
            </li>
            <li>
                <a href="/website-hosting">Hosting</a>
            </li>
            <li>
                <a href="/premium-mailbox">Premium Mailbox</a>
            </li>
            <li>
                <a href="/showmax">Showmax</a>
            </li>
        </ul>
    );
}