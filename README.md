# testdb-node
Test db Node.js
# Logging Standards
### format
**{date/time, type, criticality, component, name, version, section, {message}}**
````
{ 
    'date':'2017-mar-20 17:30:33',
    'traceid':'1a8ca584-4875-41aa-aa3e-3c8ba013a1dd'
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
### trace
Customer journey tracking ID - ID passed to the program to trace logs against a particular customer interraction.
### type
1) component - information indicating readiness and operational stqate of the component
3) performance - information for controlling and measuring performance including scaling and management
2) security - information on security, permissions, authorisations and identities 
3) alert - defined component alerts for escalation of monitoring
4) debug - software design and debugging information
5) statistics - application monitoring statistics for reporting
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
 
## Debug Levels
### 0 - Quiet
The following is produced:
* Service start & terminate Messages
* Warning and above alerts 
* Warning and above security events
* Warning and above errors
* Scaling alert messages
* Statistics
 
### 1 - Normal
Level 0 plus
* Logging the entry of each function/component
* Information level alerts
* Information level security events
* Information level errors
* Scaling statistics
* Statistics
 
### 2 - Performant
Level 1 plus
* Logging the entry of each sub routine inside each function
* Logging each significant performance item inside each function
* Information level alerts
* Information level security events
* Information level errors
* Scaling statistics
* Statistics
 
### 3 - Verbose
Level 2 plus
* All structured logging
 
### 4 - Complete
* All logging entries
 
## Log Variables
### debuglevel
Inherited debug level - Indicates verboscity of logging.
Default of 1
### tracingid
Customer journey tracking ID - ID passed to the program to trace logs against a particular customer interraction.
