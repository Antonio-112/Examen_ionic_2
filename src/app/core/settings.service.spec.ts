import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    service = new SettingsService();
  });

  it('should default allowDelete to false', () => {
    expect(service.getAllowDelete()).toBe(false);
  });

  it('should set and get allowDelete', () => {
    service.setAllowDelete(true);
    expect(service.getAllowDelete()).toBe(true);
  });
});
