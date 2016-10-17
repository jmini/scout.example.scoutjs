package ch.ahoegger.scout.example.scoutjs.shared.text;

import org.eclipse.scout.rt.platform.Order;
import org.eclipse.scout.rt.shared.services.common.text.AbstractDynamicNlsTextProviderService;

/**
 * <h3>{@link DefaultTextProviderService}</h3>
 *
 * @author aho
 */
@Order(-2000)
public class DefaultTextProviderService extends AbstractDynamicNlsTextProviderService {
  @Override
  public String getDynamicNlsBaseName() {
    return "ch.ahoegger.scout.example.scoutjs.shared.texts.Texts";
  }
}
