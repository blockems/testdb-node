# testdb-node
Test db Node.js
# Logging Standards
### format
**{date/time, type, criticality, component, name, version, section, {message}}**
````
{ 
    'date':'2017-mar-20 17:30:33',
    'type':'performance', 
    'criticality': 'informational',
    'component':'BFF',
    'name':'melb.bff.inst3',
    'version':'1.0',
    'section':'cpu',
    'message': {
        'CPU.avg':33, 
        'transactions.sec': 435, 
        'active.sessions':30
        } 
    }
````
### date/time
Date/Time - 'yyyy'-'Mon'-'dd' 'HH:mm:ss'
### type
1) component - information indicating readiness and operational stqate of the component
3) performance - information for controlling and measuring performance including scaling and management
2) security - information on security, permissions, authorisations and identities 
3) alert - defined component alerts for escalation of monitoring
4) debug - software design and debugging information
### criticality
1) informational - General logging and process information
2) alert - Information indicating issues that is not time critical
3) warning - Information indicating potential points of failure that is immediate or conditions need monitoring
4) critical - information indicating failures/breaches/conditions have occured that require immediate action
### component
component name and identifying information
### version
version number of the component
### section
sub section identifying information
### message#
message - text of the log item

 
