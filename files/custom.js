$(".createAccount").click(function(){$("form#customer_login").addClass("inactive"),setTimeout(function(){$("form#create_customer").removeClass("hidden"),$("form#customer_login").addClass("hidden")},350),setTimeout(function(){$("form#create_customer").removeClass("inactive")},500)}),$(".loginAccount").click(function(){$("form#create_customer").addClass("inactive"),setTimeout(function(){$("form#customer_login").removeClass("hidden"),$("form#create_customer").addClass("hidden")},350),setTimeout(function(){$("form#customer_login").removeClass("inactive")},500)}),$(".closePopupPage").click(function(){window.history.back()}),$(document).ready(function(){var toc=$("#toc");if(toc.length){var content=$(".Article__Body");if(content.length){var headings=content.find("h1, h2");headings.length&&headings.each(function(index,element){var heading=$(this),text=heading.text(),id=heading.attr("id");id||(id="heading-"+index,heading.attr("id",id));for(var level=parseInt(heading.prop("tagName").substring(1)),indent="",i=2;i<=level;i++)indent+="&nbsp;&nbsp;&nbsp;&nbsp;";var li=$("<li>").addClass("toc-level-"+level).html(indent+"<a href='#"+id+"'>"+text+"</a>");toc.append(li)})}}}),$(document).ready(function(){var $searchBox=$(".newSearchBox"),$searchInput=$(".inputSearch",$searchBox);$(".openPopup").click(function(){$searchBox.toggleClass("open"),$searchInput.focus()}),$searchInput.keyup(function(){$searchInput.val().length>0?$searchBox.addClass("hasValue"):$searchBox.removeClass("hasValue")})}),$(document).ready(function(){$(".openButton").click(function(){$(".customPopup.open").removeClass("open"),$(".openButton").removeClass("active");var popupId=$(this).data("open");$(popupId).addClass("open");var target=$(".customPopup.open"),targetID=target.attr("id"),elementToActivate=$('[data-open="#'+targetID+'"]');elementToActivate.addClass("active"),$("body").css("overflow","hidden")}),$(".closeButton").click(function(){$(".customPopup.open").removeClass("open"),$("body").css("overflow","initial")})}),$(document).ready(function(){$(".simulationLinkChange").change(function(){var selectedOption=$(this).find("option:selected"),url=selectedOption.data("url");$("#ctaSimulation").attr("href",url)})}),$(document).ready(function(){$(".cgvCheckbox").change(function(){var $submitSubscription=$(this).closest(".submitSubscription");$(this).is(":checked")?$submitSubscription.addClass("validated"):$submitSubscription.removeClass("validated")})}),$(document).ready(function(){$(window).keydown(function(event){if(event.keyCode==13)return event.preventDefault(),!1})}),$(document).ready(function(){$(".backBtn").on("click",function(){window.history.back()})});function resizeGridItem(item2){grid=document.getElementsByClassName("list_grid")[0],rowHeight=parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")),rowGap=parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap")),rowSpan=Math.ceil((item2.querySelector(".blog-post-card").getBoundingClientRect().height+rowGap)/(rowHeight+rowGap)),item2.style.gridRowEnd="span "+rowSpan}function resizeAllGridItems(){for(allItems=document.getElementsByClassName("mansorry_cell"),x=0;x<allItems.length;x++)resizeGridItem(allItems[x])}function resizeInstance(instance){item=instance.elements[0],resizeGridItem(item)}window.onload=resizeAllGridItems(),window.addEventListener("resize",resizeAllGridItems),allItems=document.getElementsByClassName("mansorry_cell");
//# sourceMappingURL=/cdn/shop/t/47/assets/custom.js.map?v=60632638572995280311727173941