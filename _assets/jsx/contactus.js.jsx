function generateRequest(name, email, body) {
  var request = {
    Name: name,
    Email: email,
    Body: body,
  }

  console.log(request);
  return JSON.stringify(request);
}

function validateForm(name, email, body) {

}

var CommentForm = React.createClass({
  getInitialState: function() {
    return {
      submitted: null
    }
  },
  handleSubmit: function(e) {
    var name = React.findDOMNode(this.refs.name).value.trim();
    var email = React.findDOMNode(this.refs.email).value.trim();
    var body = React.findDOMNode(this.refs.body).value.trim();

    var request = generateRequest(name, email, body);

    e.preventDefault();
    $.ajax({
      url: 'http://api.blackpuppy.info/mail/contactus',
      dataType: 'json',
      type: 'POST',
      data: request,
      success: function(data) {
        console.log('success');
        this.setState({submitted: true})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    console.log('submit');
    return;
  },
  render: function() {
    var submitted
    if(this.state.submitted !== null) {
      submitted = <div className="alert alert-success">Message Sent</div>
    }

    return (
      <form className="form-horizontal" id="contact-form" onSubmit={this.handleSubmit}>
        {submitted}
        <div className="control-group">
          <label className="control-label" for="name">Name</label>
          <div className="controls">
            <input type="text" name="name" id="name" placeholder="Your name" className="form-control input-lg" ref="name"/>
          </div>
        </div>
        <div className="control-group">
          <label className="control-label" for="email">Email Address</label>
          <div className="controls">
            <input type="text" name="email" id="email" placeholder="Your email address" className="form-control input-lg" ref="email"/>
          </div>
        </div>
        <div className="control-group">
          <label className="control-label" for="message">Message</label>
          <div className="controls">
            <textarea name="message" id="message" rows="8" className="form-control input-lg" ref="body"></textarea>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-default btn-lg btn-block">Submit Message</button>
        </div>
      </form>
    );
  }
});

React.render(
  <CommentForm/>,
  document.getElementById('contactus')
);
