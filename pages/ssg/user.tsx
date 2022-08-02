import {memo} from 'react';
import type {NextPage, GetServerSidePropsContext} from 'next'
import Head from "next/head";
import {NotFound} from "@/components/NotFound/NotFound";
import {TUserInfo} from "@/src/types/userInfo";

const User: NextPage<TUserInfo> = memo((props) => {
    const {
        message,
        avatar_url,
        login,
        email,
        location,
        created_at,
        userId
    } = props;
    
    const isDataNotFound = !message;
    
    return (
        <div>
            <Head>
                <title>Information about user {login}</title>
                <meta name="description" content="Generated by create next app"/>
            </Head>
            {isDataNotFound ?
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <img src={avatar_url} alt="avatar" width={250} height={250}/>
                    </li>
                    <li>
                        Login: {login}
                    </li>
                    <li>
                        Email: {email ? email : 'sorry, email address is not indicated'}
                    </li>
                    
                    <li>
                        Location: {location ? location : 'sorry, location is not indicated'}
                    </li>
                    <li>
                        Created account: {created_at}
                    </li>
                </ul>
                :
                <NotFound userId='AksenovKirill'/>}
        </div>
    )
});

User.displayName = 'User'

export async function getStaticProps(context: GetServerSidePropsContext) {
    
    const data = await fetch(`https://api.github.com/users/AksenovKirill`,
        {
            method: 'GET'
        }
    );
    
    const userData = await data.json();
    
    return {
        props: userData
    }
}

export default User;
