import {JwtLibrary} from '../libraries/jwt.library';
import {TRANSLATE_SETTINGS} from '../settings/general.settings';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

export class FunctionsGeneric {
  static initialize() {
  }

  public static sortListByProperty(values: any[], property: string): any[] {
    return values.sort((a, b) => {
      if (a[property] > b[property]) {
        return 1;
      }
      if (a[property] < b[property]) {
        return -1;
      }
      return 0;
    });
  }

  public static isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }

  public static validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (!(control instanceof FormControl)) {
        if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        } else if (control instanceof FormArray) {
          for (const auxControl of control.controls) {
            if (auxControl instanceof FormControl) {
              auxControl.markAsTouched({onlySelf: true});
            } else if (auxControl instanceof FormGroup) {
              this.validateAllFormFields(auxControl);
            }
          }
        }
      } else {
        control.markAsTouched({onlySelf: true});
      }
    });
  }

  public static getDecodedToken(): any {
    // const token = localStorage.getItem('token');
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsInR5cCI6IkpXVCIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJuYmYiOjE1NzIzNjU2NzQsImV4cCI6MTU3MzY2MTY3NCwiaXNzIjoid3d3LmRvY3RvcmlzeS5jb20iLCJhdWQiOlsid3d3LmRvY3RvcmlzeS5jb20vcmVzb3VyY2VzIiwiQVBJX1JFU09VUkNFX1NDSEVEVUxFIiwicHJvZmlsZXMiXSwiY2xpZW50X2lkIjoiQU5HVUxBUl9XRUJfQ0xJRU5UIiwic3ViIjoiN2E1OTkxYTktZGNjNS00NTBkLThmYjktOTg1NzEwZDllOTE2IiwiYXV0aF90aW1lIjoxNTcyMzY1NjY5LCJpZHAiOiJsb2NhbCIsImZpcnN0X25hbWUiOiJSb25hbGQiLCJtaWRkbGVfbmFtZSI6IlNhbnRpYWdvIiwiZmlyc3Rfc3VybmFtZSI6IlphbWJyYW5vIiwic2Vjb25kX3N1cm5hbWUiOiJQaXNjbyIsImFkZHJlc3NfY2l0eSI6IkVDMDAwMSIsImFkZHJlc3NfY291bnRyeSI6ImZlZmM3ZmQwLWJkNzMtZThmOC04ZmEzLTUxZGY1OWVmYjM2YyIsInBob25lX2NvZGUiOiI1OTMiLCJwaWN0dXJlX3VybCI6IltcImh0dHBzOi8vYmxvYmRvY3RvcmlzeS5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXMvN2E1OTkxYTktZGNjNS00NTBkLThmYjktOTg1NzEwZDllOTE2LzY3MjMyNzBhLTA4NWQtNDdlYi04OTRmLTAwMjgzOTRlYWEwNXgzMFwiLFwiaHR0cHM6Ly9ibG9iZG9jdG9yaXN5LmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcy83YTU5OTFhOS1kY2M1LTQ1MGQtOGZiOS05ODU3MTBkOWU5MTYvNjcyMzI3MGEtMDg1ZC00N2ViLTg5NGYtMDAyODM5NGVhYTA1eDM1XCIsXCJodHRwczovL2Jsb2Jkb2N0b3Jpc3kuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVzLzdhNTk5MWE5LWRjYzUtNDUwZC04ZmI5LTk4NTcxMGQ5ZTkxNi82NzIzMjcwYS0wODVkLTQ3ZWItODk0Zi0wMDI4Mzk0ZWFhMDV4NzBcIixcImh0dHBzOi8vYmxvYmRvY3RvcmlzeS5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXMvN2E1OTkxYTktZGNjNS00NTBkLThmYjktOTg1NzEwZDllOTE2LzY3MjMyNzBhLTA4NWQtNDdlYi04OTRmLTAwMjgzOTRlYWEwNXgxMjBcIixcImh0dHBzOi8vYmxvYmRvY3RvcmlzeS5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXMvN2E1OTkxYTktZGNjNS00NTBkLThmYjktOTg1NzEwZDllOTE2LzY3MjMyNzBhLTA4NWQtNDdlYi04OTRmLTAwMjgzOTRlYWEwNXgyMDBcIixcImh0dHBzOi8vYmxvYmRvY3RvcmlzeS5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXMvN2E1OTkxYTktZGNjNS00NTBkLThmYjktOTg1NzEwZDllOTE2LzY3MjMyNzBhLTA4NWQtNDdlYi04OTRmLTAwMjgzOTRlYWEwNXgyNzBcIl0iLCJyb2xlIjoidXNlciIsImVtYWlsIjoicm9uYWxkLnphbWJyYW5vQGJheXRlcS5lcyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaG9uZV9udW1iZXIiOiIwOTgzNzMyNjY0IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIkFQSV9SRVNPVVJDRV9TQ0hFRFVMRSIsInByb2ZpbGVzIl0sImFtciI6WyJwd2QiXX0.TES8zKTYfmFXutxWIBsi73Fx2fGnhOIZQ1Qvnsb5wRlYw1zyZhwoDAVfn2klyw4eyQJsCSdO-qucGG6QvTspwrzgPjk75Rp3qVizy-FPHI_2-YQG9JSqWUdXFG9PMU9xRb2_RAo_wzfrTY0rqhn9kaaChhBStjSe4pftqD7D1k5qOZkX7QJPq_UPyC2iXy6EPn7mW3C_Oe6VuEB4mnuHCydv6SopZ4qFwEuP8Q_RerYDJZY4B2HX1e7_DHjno-K9MtYl4ngImHFGqSmlOUcOJSfhHwNhOgmQyFuMLlSwmgBbikH4V9I3xiDgDA2yYv5iKOpkroXp_HfkWR0lYdvu7A';
    if (!token) {
      return;
    }
    return JwtLibrary.instance.decode(token);
  }

  public static getLang(): string {
    let lang = localStorage.getItem('lang');
    if (!lang) {
      lang = TRANSLATE_SETTINGS.defaultLang;
      localStorage.setItem('lang', lang);
    }
    return lang;
  }
}

FunctionsGeneric.initialize();
