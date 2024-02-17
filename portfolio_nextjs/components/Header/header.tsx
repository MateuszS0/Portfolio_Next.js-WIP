import Animation from "../Animation/animation";

const Header = () => {
    return(
    <div className="header-wrapper flex justify-center">
        <div className="w-full flex gap-4">
            <div className="w-4/6 m-6">Etiam quis dui feugiat, euismod enim eu, ullamcorper orci. In lobortis quis quam et maximus. Sed rhoncus, lacus vitae consectetur laoreet, turpis tellus bibendum lectus, ut rutrum est nunc sit amet lacus. Nunc nisi mauris, gravida vel luctus in, egestas ut ligula. Curabitur rutrum, leo ac placerat fermentum, lectus diam rutrum libero, eu fermentum dui libero vitae elit. Nunc ornare ac elit non facilisis. Praesent justo ex, aliquam eu vestibulum vitae, aliquet ac sapien. Integer mollis neque mauris, non consectetur libero porta eget. Fusce molestie turpis non velit dignissim, id vehicula mauris vehicula. Aliquam accumsan maximus orci vitae dapibus. Proin volutpat, erat et varius tristique, diam elit maximus augue, vitae dignissim urna magna pulvinar diam. Praesent rhoncus tortor sodales, aliquam lacus et, posuere nisi.</div>
            <div className="w-2/6 m-8"><Animation/></div>
        </div>
    </div>
    )
}
export default Header;