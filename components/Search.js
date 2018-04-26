Search = React.createClass({
    
    // stan poczatkowy, searching bar jest pusty
    getInitialState(){
        return {
            searchingText: ''
        };
    },
    
    
    render: function(){
        
        var styles = {
            fontSize: '1.5em',
            width: '90%',
            maxWidth: '350px'
        };
        
        return  (
            <input
            type='text'
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            placeholder='Tutaj wpisz wyszukiwaną frazę'
            style={styles}
            value={this.state.searchingText} 
            />
            );
            
         },
    
    // funkcja uruchamia się w momencie zmiany wartości input (atrybut pola input - onchange)
    handleChange: function(event){
        var searchingText = event.target.value; //wartość zdarzenia
        this.setState({
            searchingText: searchingText // zaktualizowanie stanu o wartość zdarzenia
        });
        
         // jeżeli wpiszemy więcej niż dwa znaki wywołujemy funkcję, przekazaną do propsa, wysyłana wartość to wpisany tekst
        if (searchingText.length > 2) {
          this.props.onSearch(searchingText);
        }
    },

    //nasłuchiwanie na kliknięcie enter --> ponowne uruchomienie funkcji wysyłającej zapytanie po gifa
  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText);
    }
  }
    
    
})