export function condition(condition) {
    switch (condition) {
        case 'storm':
            return icon = {
                name: 'thunderstorm-outline',
                color: '#1ec9ff'
            };
            break;
        case 'clear_day':
            return icon = {
                name: 'sunny-outline',
                color: '#ffB300'
            };
            break;
        case 'clear_night':
            return icon = {
                name: 'moon-outline',
                color: '#223d47'
            };
            break;
        case 'rain':
            return icon = {
                name: 'rainy-outline',
                color: '#1ec9ff'
            };
            break;
        case 'snow':
            return icon = {
                name: 'snow-outline',
                color: '#373737'
            };
            break;
        case 'cloudly_day':
            return icon = {
                name: 'partly-sunny-outline',
                color: '#ffB300'
            };
            break;
        case 'cloudly_night':
            return icon = {
                name: 'cloudy-night-outline',
                color: '#223d47'
            };
            break;
        case 'cloud':
            return icon = {
                name: 'cloud-outline',
                color: '#373737'
            };
            break;
        default:
            return icon = {
                name: 'cloud-outline',
                color: '#cccccc'
            }
    }
}