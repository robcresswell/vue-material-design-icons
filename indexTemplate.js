{{#names}}
import {{pascal}} from './{{name}}.vue'
{{/names}}

{{#names}}
{{=<% %>=}}
  export{ <%pascal%> }
<%={{ }}=%>
{{/names}}
