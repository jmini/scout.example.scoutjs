package ch.ahoegger.scout.example.scoutjs.ui.html;

import org.eclipse.scout.rt.platform.Order;
import org.eclipse.scout.rt.shared.services.common.text.AbstractDynamicNlsTextProviderService;

@Order(3550)
public class JsWidgetsTextProviderService extends AbstractDynamicNlsTextProviderService {

  @Override
  public String getDynamicNlsBaseName() {
    return "ch.ahoegger.scout.example.scoutjs.ui.html.Texts";
  }

}
