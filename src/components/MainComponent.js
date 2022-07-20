import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null,
        };
    }

    onDishSelect(dishID) {
        this.setState({ selectedDish: dishID });
    }

    render() {
        return (
            <div className='Main'>

                {/* Thanh tiêu đề */}
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>

                {/* Khi click vào món ăn gọi hàm onDishSelect */}
                <Menu dishes={this.state.dishes}
                    onClick={(dishID) => this.onDishSelect(dishID)} />

                {/* Hiển thị chi tiết món ăn và comment của món ăn */}
                {/* Tìm bằng id trong danh sách món ăn rồi gửi vào DishDetail để hiển thị */}
                <DishDetail
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />


            </div>
        );
    }


}

export default Main;
