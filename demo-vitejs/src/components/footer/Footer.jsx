export default function Footer() {
    return (
        <footer className="container py-3">
            {/* py là padding theo trục y của đồ thị nghĩa là sẽ padding top-bottom */}
            Copyright &copy; {(new Date).getFullYear()}
        </footer>
    )
}