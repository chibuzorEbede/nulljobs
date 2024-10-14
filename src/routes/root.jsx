import '../index.css'
import Layout from '../components/layout'
import AppBar from '../components/app-bar'
import FilterInput from '../components/shared/filter-input'
import List from '../components/list'
import DesktopSearch from '../components/desktop-search'
import data from "../data/index.json"


const Root = ()=>{
    return (
        <Layout>
            <AppBar/>
            <FilterInput/>
            <DesktopSearch/>
            <List data={data}/>
        </Layout>
    )
}


export default Root