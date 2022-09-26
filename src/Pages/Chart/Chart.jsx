import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseItemQuantity, deleteChartItem, increaseItemQuantity } from '../../redux/action';
import './Chart.css';

const Chart = () => {
  const chartItems = useSelector(state => state.chart);
  const dispatch = useDispatch();
  let totalPrice = chartItems.map(ele => ele.num * ele.price)
  return (
    <section className="Chart section_padding">
      <h2 className='main_heading'>Cart</h2>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            {
              chartItems.length > 0 ? chartItems.map(ele => (
                <div className="chartItem mb-5" key={ele.id}>
                  <div className="chartItem_image text-center">
                    <img src={ele.img} alt="chartItem img" />
                  </div>
                  <div className="chartItem_info flex_center flex-column">
                    <p className='name'>{ele.name}</p>
                    <div className='chartItem_options flex_center'>
                      <ul className='colors'>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <select name="size" className='form-select' defaultValue="sm">
                        <option value="xs">xs</option>
                        <option value="sm">sm</option>
                        <option value="md">md</option>
                        <option value="lg">lg</option>
                        <option value="xlg">xlg</option>
                        <option value="2xlg">2xlg</option>
                        <option value="3xlg">3xlg</option>
                      </select>
                    </div>
                    <div className='price'><span className='currentPrice'>${ele.price}</span>{ele.oldprice && (<span className='oldprice'>${ele.oldprice}</span>)}</div>
                    <ul className='chartItem_control'>
                      <li onClick={() => dispatch(decreaseItemQuantity(ele))}>-</li>
                      <li className='num'>{ele.num}</li>
                      <li onClick={() => dispatch(increaseItemQuantity(ele))}>+</li>
                    </ul>
                    <p className='chartItem_total'><span className='chartItem_total_name'>Total: </span><span className='total'>${ele.num * ele.price}</span></p>
                    <div className="confirm d-flex gap-2">
                      <button className='Remove' onClick={() => dispatch(deleteChartItem(ele))}>Remove</button>
                      <Link className='buy custom_button' to='/Login'>Buy</Link>
                    </div>
                  </div>
                </div>
              )) : <p className='noItems'>No Items yet</p>
            }
          </Col>
          <Col xs={{ span: 12, order: 'first' }} md={{ span: 4, order: 'last' }} className="mb-5 mb-md-0">
            <div className="CartSummary">
              <p className='CartSummary_name'>Cart Summary</p>
              {
                chartItems && chartItems.map(ele => (
                  <p className='CartSummary_item' key={ele.id}><span className='CartSummary_item_name'>{ele.name}:</span><span className='CartSummary_item_price'>${ele.price * ele.num}</span></p>
                ))
              }
              <p className='CartSummary_total'><span className='CartSummary_total_name'>Total:</span><span className='CartSummary_total_number'>${chartItems.length > 0 ? totalPrice.reduce((acc, current) =>
                acc + current
              ) : 0}</span></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Chart