import MainHeader from "../components/navigation/Navigation/MainHeader";
import Pets from "../pages/Pets";
import Footer from "../section/footer/Footer";
import Hero from "../section/hero/Hero";
import LostAndFound from "../section/lost&found/LostAndFound";
import PetSection from "../section/lost&found/PetSection";
import PetFinder from "../section/petFinder/PetFinder";
import SearchBox from "../section/search/SearchBox";

import classes from "./Home.module.css";

const Home = () => {
	return (
		<div className={classes.home}>
			<Hero />
			<PetFinder />
			<LostAndFound />
			<PetSection />
			<SearchBox />
			<Footer />
		</div>
	);
};

export default Home;
