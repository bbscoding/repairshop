import styles from '../style.module.css'

export default async function Template({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <div className={`${styles.animateAppear}`}>
                {children}
        </div>
    )
}