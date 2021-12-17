import CreatePosition from "./CreatePosition";
import PositionDataService from "../services/position.service";

class EditPosition extends CreatePosition {
    constructor(props) {
        super(props);
        this.saveLabel = "Save";
    }

    componentDidMount() {
        PositionDataService.get(this.props.match.params.id)
            .then(res => {
                this.setState(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }



    onSubmit(e) {
        e.preventDefault()

        PositionDataService.update(this.props.match.params.id, this.state).then(res => {
            if (res.status === 500) {
                console.log(res.data);
            } else if (res.status === 200 && res.data.success === true) {
                console.log(res.data.id);
            } else if (res.status === 200 && res.data.success !== true) {
                console.log("Error updated new data because : "+res.data.error);
            } else {
                console.log("Server error with : "+res.data);
            }
        }).catch(err => console.warn(err));

        // Redirect to Student List
        this.props.history.push('/list-position')
    }

}

export default EditPosition