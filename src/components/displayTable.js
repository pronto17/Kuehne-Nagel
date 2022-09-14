import React from "react"

class DisplayTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }


    callAPI() {
            //fetch data from API
        fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                list:data.data
            })
        })
    }

    render() {
        let tb_data = this.state.list.map((item) =>{
            return (
                <tr>
                    <td>{item.orderNo}</td>
                    <td>{item.date}</td>
                    <td>{item.customer}</td>
                    <td>{item.trackingNo}</td>
                    <td>{item.status}</td>
                    <td>{item.consignee}</td>
                    <td>
                        <button className="btn btn-danger">Remove</button>
                    </td>
                </tr>
            )
        })
        return(
            <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>orderNo</th>
                        <th>date</th>
                        <th>customer</th>
                        <th>trackingNo</th>
                        <th>status</th>
                        <th>consignee</th>
                    </tr>
                </thead>
                <tbody>
                {tb_data}
                </tbody>
            </table>
            </div>
        )
    }
}

export default DisplayTable;