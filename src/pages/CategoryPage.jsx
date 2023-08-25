import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CATEGORYS } from "../constants";

const CategoryPage = () => {
	const params = useParams();

	const category = CATEGORYS.find((category) => category.id === Number(params.id))

	return (
		<div>
			<h1>Вы выбрали категорию: {category.title}</h1>
			<p>{category.description}</p>
			<h2>Страница на доработке</h2>
			<Link to="/">Назад на главную</Link>
		</div>
	)
}

export { CategoryPage };