import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Prizes.css"
const Prizes = () => {
    return (<>
        <div className='Main-eligibility'>
            <div id='prize' className='eligibility-heading'>
                <h1>Prizes</h1>
            </div>
            <div className='prize-info'>
                <p>Mementos and prizes worth Rs 1,00,000/-, as under will be awarded.</p>
            </div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Men Team</th>
                        <th>Women Team</th>
                        <th>Men</th>
                        <th>Women</th>
                        <th>Boys(U-19)</th>
                        <th>Girls(U-19)</th>
                        <th>Men Doubles</th>
                        <th>Mixed Doubles</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Winner</b></td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>7500</td>
                        <td>7500</td>
                        <td>5000</td>
                        <td>5000</td>
                        <td>5000</td>
                        <td>5000</td>
                        <td><b>59000</b></td>
                    </tr>
                    <tr>
                        <td><b>Runner Up</b></td>
                        <td>9000</td>
                        <td>9000</td>
                        <td>6000</td>
                        <td>6000</td>
                        <td>3000</td>
                        <td>3000</td>
                        <td>3000</td>
                        <td>3000</td>
                        <td><b>42000</b></td>
                    </tr>
                    <tr>
                        <td><b>Semi Finalist 1</b></td>
                        <td>4500</td>
                        <td>4500</td>
                        <td>3000</td>
                        <td>3000</td>
                        <td>2000</td>
                        <td>2000</td>
                        <td>2500</td>
                        <td>2500</td>
                        <td><b>24000</b></td>
                    </tr>
                    <tr>
                        <td><b>Semi Finalist 2</b></td>
                        <td>4500</td>
                        <td>4500</td>
                        <td>3000</td>
                        <td>3000</td>
                        <td>2000</td>
                        <td>2000</td>
                        <td>2500</td>
                        <td>2500</td>
                        <td><b>24000</b></td>
                    </tr>
                    <tr>
                        <td><b>Total</b></td>
                        <td>30000</td>
                        <td>30000</td>
                        <td>19500</td>
                        <td>19500</td>
                        <td>12000</td>
                        <td>12000</td>
                        <td>13000</td>
                        <td>13000</td>
                        <td><b>149000</b></td>
                    </tr>
                </tbody>
            </Table>
            <div>
                <p className='pa'>Prizes may be reduced for less than 12 entries in any event.</p>
            </div>
        </div>
    </>)
}

export default Prizes