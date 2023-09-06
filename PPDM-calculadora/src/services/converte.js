
export default function Converte(converteD, converteP, inicial) {
    var str = inicial;
    if (!str) {
        return;
    }
    var valor = Number(str.replace(/,/g, '.'));
    var convertido = valor;

    if (converteD == "m" || converteD == "cm" || converteD == "km") {
        if (converteD == "cm") {
            valor = valor / 100;
        } 
        else if (converteD == "km") {
            valor = valor * 1000;
        }
        switch (converteP) {
            case '"':
                convertido = (valor / 0.0254);
                break;
    
            case "'":
                convertido = (valor / 0.3048);
                break;
    
            case "yd":
                convertido = (valor / 0.9144);
                break;
    
            case "mi":
                convertido = (valor / 1609.34);
                break;
    
            case "cm":
                convertido = (valor / 0.01);
                break;
        
            default:
                break;
        }
        
    }
    else if (converteD == '"') {
        switch (converteP) {
            case "m":
                convertido = (valor / 39.37);
                break;
    
            case "'":
                convertido = (valor / 12);
                break;
    
            case "yd":
                convertido = (valor / 36);
                break;
    
            case "mi":
                convertido = (valor / 63360);
                break;
    
            case "cm":
                convertido = (valor * 2.54);
                break;
        
            default:
                break;
        }
    }
    else if (converteD == "'") {
        switch (converteP) {
            case '"':
                convertido = (valor * 12);
                break;
    
            case "m":
                convertido = (valor / 3.281);
                break;
    
            case "yd":
                convertido = (valor / 3);
                break;
    
            case "mi":
                convertido = (valor / 5280);
                break;
    
            case "cm":
                convertido = (valor * 30.48);
                break;
        
            default:
                break;
        }
    }
    else if (converteD == "yd") {
        switch (converteP) {
            case '"':
                convertido = (valor * 36);
                break;
    
            case "'":
                convertido = (valor * 3);
                break;
    
            case "m":
                convertido = (valor / 1.094);
                break;
    
            case "mi":
                convertido = (valor / 1760);
                break;
    
            case "cm":
                convertido = (valor * 91.44);
                break;
        
            default:
                break;
        }
    }
    else if (converteD == "mi") {
        switch (converteP) {
            case '"':
                convertido = (valor * 63360);
                break;
    
            case "'":
                convertido = (valor * 5280);
                break;
    
            case "yd":
                convertido = (valor * 1760);
                break;
    
            case "m":
                convertido = (valor * 1609);
                break;
    
            case "cm":
                convertido = (valor / 0.01);
                break;
        
            default:
                break;
        }
    }

    convertido = Number(convertido).toFixed(2);
    return(String(convertido).replace(".", ','));
}