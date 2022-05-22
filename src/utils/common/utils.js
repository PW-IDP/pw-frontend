const stringToDate = (s) => {
    var dateParts = s.split('T')[0].split('-'); 
    var timeParts = s.split('T')[1].split('.')[0].split(':');
    var d = new Date(dateParts[0], --dateParts[1], dateParts[2]);
    d.setHours(timeParts[0], timeParts[1], timeParts[2])
    return d
}

export default stringToDate