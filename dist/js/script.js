!function(){for(var t,n=function(){},e=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],r=e.length,i=window.console=window.console||{};r--;)t=e[r],i[t]||(i[t]=n)}(),document.addEventListener("DOMContentLoaded",function(){var t=(function(){}(),function(){var t={};return{getDOMstrings:function(){return t}}}());(function(t,n){n.getDOMstrings();return{init:function(){console.log("App has started")}}})(0,t).init(),console.log("App has started1111"),jQuery("img.svg").each(function(){var t=jQuery(this),n=t.attr("id"),e=t.attr("class"),r=t.attr("src");jQuery.get(r,function(r){var i=jQuery(r).find("svg");void 0!==n&&(i=i.attr("id",n)),void 0!==e&&(i=i.attr("class",e+" replaced-svg")),i=i.removeAttr("xmlns:a"),t.replaceWith(i)},"xml")})});