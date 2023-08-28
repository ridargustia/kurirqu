import CardLogin from '@/views/components/molecules/CardLogin';
import styles from './Login.module.scss';

const LoginSegment = () => {
    return(
        <main className={"bg-gradient-login " + styles.bg}>
            <div className="container-login pt-4">
                <div className="row justify-content-center mt-0" style={{height: "100vh"}}>
                    <div className="col-xl-5 col-lg-6 col-md-9">
                        <CardLogin />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LoginSegment;